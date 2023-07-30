//const url = 'https://cute-entremet-f4c868.netlify.app/';

function toggleShareOptions() {
  const shareOptions = document.getElementById('shareOptions');
  shareOptions.style.display = shareOptions.style.display === 'block' ? 'none' : 'block';
}

function shareLink() {
  if (navigator.share) {
    const url = window.location.href;
    navigator.share({
      title: document.title,
      url: url
    })
      .then(() => console.log('Link shared successfully!'))
      .catch(error => console.error('Error sharing link:', error));
  } else {
    toggleShareOptions();
  }
}

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookShareUrl, '_blank');
}

function shareToInstagram() {
  const url = encodeURIComponent(window.location.href);
  const instagramShareUrl = `https://www.instagram.com/sharer.php?u=${url}`;
  window.open(instagramShareUrl, '_blank');
}

function shareToKakao() {
  const url = encodeURIComponent(window.location.href);
  const kakaoShareUrl = `https://story.kakao.com/s/share?url=${url}`;
  window.open(kakaoShareUrl, '_blank');
}


function copyCurrentLink() {
  const currentLink = window.location.href;

  const tempInput = document.createElement('input');
  tempInput.value = currentLink;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  alert('Link copied to clipboard: ' + currentLink);
}


function kakaoShare() {
Kakao.Share.createDefaultButton({
  container: '#kakaotalk-sharing-btn',
  objectType: 'feed',
  content: {
    title: '오늘의 디저트',
    description: '아메리카노, 빵, 케익',
    imageUrl:
      'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
    link: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com',
    },
  },
  itemContent: {
    profileText: 'Kakao',
    profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    titleImageText: 'Cheese cake',
    titleImageCategory: 'Cake',
    items: [
      {
        item: 'Cake1',
        itemOp: '1000원',
      },
      {
        item: 'Cake2',
        itemOp: '2000원',
      },
      {
        item: 'Cake3',
        itemOp: '3000원',
      },
      {
        item: 'Cake4',
        itemOp: '4000원',
      },
      {
        item: 'Cake5',
        itemOp: '5000원',
      },
    ],
    sum: 'Total',
    sumOp: '15000원',
  },
  social: {
    likeCount: 10,
    commentCount: 20,
    sharedCount: 30,
  },
  buttons: [
    {
      title: '웹으로 이동',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    {
      title: '앱으로 이동',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
  ],
});
}