(function () {
  const MAX_RETRIES = 15;
  const RETRY_DELAY = 100; // ms

  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function findButtonByLabel(label) {
    if (!label) return null;
    const wanted = label.trim().toLowerCase();
    const buttons = Array.from(document.querySelectorAll('.tab__button'));
    // exact match first
    let target = buttons.find((b) => (b.dataset.tabLabel || '').trim().toLowerCase() === wanted);
    if (target) return target;
    // fallback: startsWith match
    target = buttons.find((b) => (b.dataset.tabLabel || '').trim().toLowerCase().startsWith(wanted));
    return target || null;
  }

  function activateTarget(target) {
    if (!target) return false;
    const container = target.closest('.tab__container');
    const index = parseInt(target.dataset.tabIndex, 10);
    if (typeof activateTab === 'function') {
      try {
        activateTab(container, index);
        return true;
      } catch (e) {
        // fallthrough to click fallback
      }
    }
    // fallback to simulate user click
    try {
      target.click();
      return true;
    } catch (e) {
      return false;
    }
  }

  function tryActivate(retriesLeft) {
    const tabParam = getParam('tab');
    if (!tabParam) return;
    const target = findButtonByLabel(tabParam);
    if (target) {
      activateTarget(target);
      return;
    }
    if (retriesLeft > 0) {
      setTimeout(() => tryActivate(retriesLeft - 1), RETRY_DELAY);
    }
  }

  if (document.readyState === 'complete') {
    tryActivate(MAX_RETRIES);
  } else {
    window.addEventListener('load', function () {
      tryActivate(MAX_RETRIES);
    });
  }
})();
