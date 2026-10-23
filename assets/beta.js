const copyButton = document.querySelector('#copy-guide');
const copyStatus = document.querySelector('#copy-status');

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    // Share the page's canonical URL so the copied link follows the live domain.
    const guideUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href.split('#')[0];
    try {
      await navigator.clipboard.writeText(guideUrl);
      copyStatus.textContent = '링크를 복사했어요. 편한 채널로 공유해 주세요!';
    } catch {
      copyStatus.textContent = '주소창의 링크를 복사해 공유해 주세요.';
    }
  });
}
