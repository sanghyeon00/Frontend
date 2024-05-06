import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=53585895e6d11e532dbd5f8a705592a1";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
        new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '200px' }}></div>; // 지도 높이를 조정할 수 있습니다.
};

export default KakaoMap;
