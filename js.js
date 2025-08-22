

// Add interactive functionality
function shareInvitation() {
  if (navigator.share) {
    navigator.share({
      title: 'Engagement Invitation - Mohamed & Hams',
      text: 'You are invited to our engagement party!',
      url: window.location.href
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = `🎉 You're invited to Mohamed & Hams' Engagement Party! 💕\n📅 Friday, 29 August 2025\n📍 Antica in Tema\n🕐 7:00 PM onwards`;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('✨ Invitation details copied to clipboard!');
  }
}

// Add sparkle effect on mouse move
document.addEventListener('mousemove', function(e) {
  const sparkle = document.createElement('div');
  sparkle.style.position = 'fixed';
  sparkle.style.left = e.clientX + 'px';
  sparkle.style.top = e.clientY + 'px';
  sparkle.style.width = '4px';
  sparkle.style.height = '4px';
  sparkle.style.background = '#c6a34f';
  sparkle.style.borderRadius = '50%';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.zIndex = '9999';
  sparkle.style.animation = 'sparkle 1s ease-out forwards';
  
  const sparkleCSS = document.createElement('style');
  sparkleCSS.textContent = `
    @keyframes sparkle {
      0% { transform: scale(0) rotate(0deg); opacity: 1; }
      100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
    }
  `;
  document.head.appendChild(sparkleCSS);
  
  document.body.appendChild(sparkle);
  setTimeout(() => {
    document.body.removeChild(sparkle);
  }, 1000);
});

// Add click animation to the card
document.querySelector('.card').addEventListener('click', function() {
  this.style.transform = 'scale(0.98)';
  setTimeout(() => {
    this.style.transform = 'scale(1)';
  }, 150);
});
