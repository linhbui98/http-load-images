window.onload = function() {
    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    loadTime = (loadTime / 1000).toFixed(2);
    document.getElementById('timeLoad').textContent = loadTime;
}