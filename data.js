const destinations = [
    {
        name: "파리, 프랑스",
        locationName: "에펠탑",
        description: "예술과 낭만의 도시 파리! 루브르 박물관의 명작들과 센 강의 아름다운 야경을 즐겨보세요.",
        locationInfo: "프랑스 파리의 상징으로, 매년 수백만 명이 방문하는 세계적인 명소입니다.",
        image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 2, budget: 3, food: 2, activity: 1, companion: 2, art: 1, transport: 1, vibe: 2 }
    },
    {
        name: "발리, 인도네시아",
        locationName: "울루와투 사원",
        description: "신들의 섬 발리에서 끝없는 해변과 푸른 자연을 만끽하며 진정한 휴식을 경험하세요.",
        locationInfo: "절벽 끝에 위치한 힌두 사원으로, 아름다운 일몰과 전통 케착 댄스 공연으로 유명합니다.",
        image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop",
        scores: { pacing: 1, interest: 2, climate: 1, budget: 1, food: 1, activity: 2, companion: 2, art: 3, transport: 3, vibe: 1 }
    },
    {
        name: "뉴욕, 미국",
        locationName: "브루클린 브릿지",
        description: "잠들지 않는 도시 뉴욕의 화려한 스카이라인과 브로드웨이의 열기를 직접 느껴보세요.",
        locationInfo: "맨해튼과 브루클린을 연결하는 상징적인 다리로, 환상적인 도시 전망을 자랑합니다.",
        image: "https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=2074&auto=format&fit=crop",
        scores: { pacing: 3, interest: 3, climate: 3, budget: 3, food: 3, activity: 1, companion: 1, art: 2, transport: 1, vibe: 2 }
    },
    {
        name: "인터라켄, 스위스",
        locationName: "하더 쿨름",
        description: "알프스의 심장, 인터라켄에서 패러글라이딩과 하이킹 등 대자연의 위대함을 온몸으로 체험하세요.",
        locationInfo: "인터라켄의 전경과 알프스 봉우리를 한눈에 담을 수 있는 최고의 전망대입니다.",
        image: "https://images.unsplash.com/photo-1594132352203-913a1e5a5a09?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 3, interest: 2, climate: 2, budget: 3, food: 1, activity: 2, companion: 2, art: 3, transport: 2, vibe: 1 }
    },
    {
        name: "교토, 일본",
        locationName: "기요미즈데라",
        description: "천년 고도 교토의 고즈넉한 신사와 전통 가옥 거리에서 일본의 아름다움을 느껴보세요.",
        locationInfo: "언덕 위에 세워진 목조 사찰로, 교토 시내를 한눈에 조망할 수 있는 멋진 경치를 자랑합니다.",
        image: "https://images.unsplash.com/photo-1584204216299-0934e85afb5c?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 1, interest: 1, climate: 3, budget: 2, food: 1, activity: 1, companion: 1, art: 1, transport: 1, vibe: 1 }
    },
    {
        name: "로마, 이탈리아",
        locationName: "콜로세움",
        description: "살아있는 역사 박물관, 로마에서 고대 제국의 영광과 젤라또의 달콤함을 느껴보세요.",
        locationInfo: "고대 로마 검투사들의 경기가 열렸던 원형 경기장으로, 로마의 상징적인 건축물입니다.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop",
        scores: { pacing: 3, interest: 1, climate: 1, budget: 2, food: 1, activity: 1, companion: 2, art: 1, transport: 1, vibe: 2 }
    },
    {
        name: "방콕, 태국",
        locationName: "왓 아룬",
        description: "활기찬 에너지와 황금빛 사원이 가득한 방콕에서 미식과 쇼핑의 즐거움을 만끽하세요.",
        locationInfo: "'새벽 사원'이라 불리며, 아름다운 도자기 장식과 짜오프라야 강의 일몰이 장관을 이룹니다.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 3, interest: 3, climate: 1, budget: 1, food: 1, activity: 1, companion: 1, art: 3, transport: 1, vibe: 2 }
    },
    {
        name: "런던, 영국",
        locationName: "타워 브리지",
        description: "전통과 현대가 공존하는 런던. 무료 박물관 투어와 웨스트엔드 뮤지컬의 감동을 느껴보세요.",
        locationInfo: "템스 강 위에 세워진 아름다운 다리로, 런던의 대표적인 랜드마크 중 하나입니다.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 2, budget: 3, food: 3, activity: 1, companion: 2, art: 1, transport: 1, vibe: 2 }
    },
    {
        name: "시드니, 호주",
        locationName: "오페라 하우스",
        description: "아름다운 항구 도시 시드니에서 서핑을 즐기고 오페라 하우스의 멋진 야경을 감상하세요.",
        locationInfo: "독특한 조개 모양의 지붕으로 유명한 세계적인 공연장으로, 호주의 상징입니다.",
        image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1933&auto=format&fit=crop",
        scores: { pacing: 2, interest: 2, climate: 1, budget: 3, food: 3, activity: 2, companion: 3, art: 2, transport: 2, vibe: 2 }
    },
    {
        name: "프라하, 체코",
        locationName: "카를교",
        description: "동화 속 풍경을 간직한 프라하. 낭만적인 카를교를 거닐며 중세의 향기에 취해보세요.",
        locationInfo: "블타바 강 위에 놓인 유서 깊은 다리로, 아름다운 조각상들과 프라하 성의 전망으로 유명합니다.",
        image: "https://images.unsplash.com/photo-1551203590-56d4b533a1e2?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 2, budget: 1, food: 2, activity: 1, companion: 2, art: 1, transport: 1, vibe: 1 }
    },
    {
        name: "칸쿤, 멕시코",
        locationName: "플라야 델피네스",
        description: "카리브해의 보석 칸쿤에서 에메랄드빛 바다를 보며 칵테일 한 잔의 여유를 즐겨보세요.",
        locationInfo: "아름다운 백사장과 'CANCUN' 조형물로 유명한 칸쿤의 대표적인 공공 해변입니다.",
        image: "https://images.unsplash.com/photo-1560527840-ae176461c398?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 1, interest: 2, climate: 1, budget: 3, food: 2, activity: 2, companion: 2, art: 3, transport: 3, vibe: 2 }
    },
    {
        name: "두바이, UAE",
        locationName: "부르즈 할리파",
        description: "사막 위의 기적, 두바이에서 세계 최고층 빌딩과 화려한 쇼핑몰의 위용을 경험하세요.",
        locationInfo: "세계에서 가장 높은 빌딩으로, 전망대에서 두바이의 환상적인 전경을 감상할 수 있습니다.",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 2, interest: 3, climate: 1, budget: 3, food: 3, activity: 1, companion: 3, art: 2, transport: 3, vibe: 2 }
    },
    {
        name: "싱가포르",
        locationName: "마리나 베이 샌즈",
        description: "깨끗하고 안전한 도시 싱가포르에서 맛있는 음식과 아름다운 야경, 즐거운 쇼핑을 모두 즐겨보세요.",
        locationInfo: "상징적인 인피니티 풀과 스카이파크를 갖춘 호텔로, 싱가포르의 랜드마크입니다.",
        image: "https://images.unsplash.com/photo-1508804185872-d7bad50a4b3d?q=80&w=1964&auto=format&fit=crop",
        scores: { pacing: 2, interest: 3, climate: 1, budget: 3, food: 3, activity: 1, companion: 3, art: 2, transport: 1, vibe: 2 }
    },
    {
        name: "하노이, 베트남",
        locationName: "호안끼엠 호수",
        description: "베트남의 심장, 하노이의 활기찬 구시가지에서 쌀국수와 커피, 그리고 역사를 만나보세요.",
        locationInfo: "하노이 중심부에 위치한 아름다운 호수로, 현지인들의 휴식처이자 주요 관광 명소입니다.",
        image: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 1, budget: 1, food: 1, activity: 3, companion: 1, art: 3, transport: 1, vibe: 2 }
    },
    {
        name: "바르셀로나, 스페인",
        locationName: "사그라다 파밀리아",
        description: "천재 건축가 가우디의 도시, 바르셀로나에서 그의 독창적인 건축물과 지중해의 열정을 느껴보세요.",
        locationInfo: "가우디가 설계한 성당으로, 아직도 건설 중인 경이로운 건축물입니다.",
        image: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 3, interest: 1, climate: 1, budget: 2, food: 2, activity: 3, companion: 2, art: 1, transport: 1, vibe: 2 }
    },
    {
        name: "퀸스타운, 뉴질랜드",
        locationName: "밀포드 사운드",
        description: "모험의 수도 퀸스타운에서 번지점프, 스카이다이빙 등 짜릿한 액티비티에 도전해보세요.",
        locationInfo: "피오르드 국립공원의 보석으로, 빙하가 깎아 만든 장엄한 자연 경관을 자랑합니다.",
        image: "https://images.unsplash.com/photo-1507692049457-4b3a43393b3d?q=80&w=1935&auto=format&fit=crop",
        scores: { pacing: 3, interest: 2, climate: 2, budget: 3, food: 2, activity: 2, companion: 1, art: 3, transport: 2, vibe: 1 }
    },
    {
        name: "암스테르담, 네덜란드",
        locationName: "운하 크루즈",
        description: "자전거와 운하의 도시 암스테르담에서 자유로운 분위기와 예술의 향기를 만끽하세요.",
        locationInfo: "도시의 아름다운 건축물과 다리를 감상하며 낭만적인 시간을 보낼 수 있는 최고의 방법입니다.",
        image: "https://images.unsplash.com/photo-1524047935522-305f6d9a4647?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 2, budget: 2, food: 2, activity: 1, companion: 2, art: 1, transport: 1, vibe: 2 }
    },
    {
        name: "서울, 대한민국",
        locationName: "경복궁",
        description: "전통과 현대가 어우러진 서울! 고궁의 고즈넉함과 K-컬처의 역동성을 동시에 느껴보세요.",
        locationInfo: "조선 왕조 제일의 법궁으로, 서울의 중심에서 대한민국의 역사를 느낄 수 있는 곳입니다.",
        image: "https://images.unsplash.com/photo-1557426834-c3614e76c944?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 3, interest: 3, climate: 3, budget: 2, food: 1, activity: 1, companion: 3, art: 2, transport: 1, vibe: 2 }
    },
    {
        name: "리오데자네이루, 브라질",
        locationName: "구세주 그리스도상",
        description: "삼바와 축구의 나라 브라질! 리오의 뜨거운 해변과 장엄한 예수상 아래서 열정을 느껴보세요.",
        locationInfo: "코르코바두 산 정상에 위치한 거대한 예수상으로, 리오와 브라질의 상징입니다.",
        image: "https://images.unsplash.com/photo-1543325692-4632884a4b27?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 3, interest: 2, climate: 1, budget: 2, food: 1, activity: 2, companion: 2, art: 3, transport: 3, vibe: 2 }
    },
    {
        name: "카이로, 이집트",
        locationName: "기자의 피라미드",
        description: "고대 문명의 신비를 간직한 카이로에서 스핑크스와 피라미드의 위대함을 직접 확인해보세요.",
        locationInfo: "고대 이집트의 가장 유명한 유적으로, 세계 7대 불가사의 중 하나입니다.",
        image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 3, interest: 1, climate: 1, budget: 1, food: 1, activity: 3, companion: 1, art: 1, transport: 3, vibe: 2 }
    },
    {
        name: "베네치아, 이탈리아",
        locationName: "리알토 다리",
        description: "물의 도시 베네치아에서 곤돌라를 타고 미로 같은 운하를 누비며 낭만을 즐겨보세요.",
        locationInfo: "대운하를 가로지르는 가장 오래되고 유명한 다리로, 주변에 활기찬 시장이 열립니다.",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop",
        scores: { pacing: 1, interest: 1, climate: 2, budget: 3, food: 2, activity: 1, companion: 2, art: 1, transport: 1, vibe: 1 }
    },
    {
        name: "산토리니, 그리스",
        locationName: "이아 마을",
        description: "하얀 건물과 파란 지붕이 빛나는 산토리니에서 지중해의 가장 아름다운 일몰을 감상하세요.",
        locationInfo: "절벽 위에 자리한 그림 같은 마을로, 환상적인 칼데라 전망과 일몰로 유명합니다.",
        image: "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 1, interest: 2, climate: 1, budget: 3, food: 2, activity: 1, companion: 2, art: 3, transport: 2, vibe: 1 }
    },
    {
        name: "마추픽추, 페루",
        locationName: "잉카 트레일",
        description: "구름 속 공중도시 마추픽추. 잉카인들의 지혜가 담긴 신비로운 유적을 탐험해보세요.",
        locationInfo: "안데스 산맥을 따라 마추픽추까지 이어지는 고대 잉카의 길로, 최고의 트레킹 코스 중 하나입니다.",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 3, interest: 1, climate: 2, budget: 2, food: 1, activity: 2, companion: 1, art: 1, transport: 2, vibe: 1 }
    },
    {
        name: "레이캬비크, 아이슬란드",
        locationName: "블루라군",
        description: "불과 얼음의 땅, 아이슬란드에서 오로라를 사냥하고 신비로운 빙하를 탐험하는 특별한 경험!",
        locationInfo: "화산암 지대에 위치한 지열 온천으로, 미네랄이 풍부한 푸른 물에서 온천욕을 즐길 수 있습니다.",
        image: "https://images.unsplash.com/photo-1549618247-4d8b593a2b72?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 2, interest: 2, climate: 2, budget: 3, food: 3, activity: 2, companion: 2, art: 3, transport: 2, vibe: 1 }
    },
    {
        name: "홍콩",
        locationName: "빅토리아 피크",
        description: "백만 불짜리 야경을 자랑하는 홍콩. 화려한 쇼핑몰과 다채로운 음식이 가득한 미식의 천국!",
        locationInfo: "홍콩의 스카이라인과 빅토리아 항을 한눈에 담을 수 있는 최고의 전망대입니다.",
        image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1964&auto=format&fit=crop",
        scores: { pacing: 3, interest: 3, climate: 1, budget: 2, food: 1, activity: 1, companion: 2, art: 2, transport: 1, vibe: 2 }
    },
    {
        name: "비엔나, 오스트리아",
        locationName: "쇤부른 궁전",
        description: "음악의 도시 비엔나에서 클림트의 '키스'를 감상하고, 아인슈페너 커피의 본고장을 느껴보세요.",
        locationInfo: "합스부르크 왕가의 여름 별궁으로, 화려한 건축물과 아름다운 정원으로 유명합니다.",
        image: "https://images.unsplash.com/photo-1560706360-1cf5a863b15f?q=80&w=1935&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 2, budget: 2, food: 2, activity: 1, companion: 2, art: 1, transport: 1, vibe: 1 }
    },
    {
        name: "밴쿠버, 캐나다",
        locationName: "캐필라노 현수교",
        description: "대도시와 대자연이 완벽하게 어우러진 밴쿠버에서 하이킹과 도시 생활을 동시에 즐겨보세요.",
        locationInfo: "울창한 숲 속, 캐필라노 강 위 70m 높이에 걸려있는 아찔하고 긴 현수교입니다.",
        image: "https://images.unsplash.com/photo-1569421731215-288212e36636?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 2, interest: 2, climate: 2, budget: 2, food: 3, activity: 2, companion: 3, art: 3, transport: 2, vibe: 1 }
    },
    {
        name: "케이프타운, 남아프리카공화국",
        locationName: "테이블 마운틴",
        description: "장엄한 테이블 마운틴 아래, 희망봉과 펭귄 비치가 있는 다채로운 매력의 도시, 케이프타운.",
        locationInfo: "정상이 평평한 독특한 모양의 산으로, 케이블카를 타고 올라가 도시와 대서양의 멋진 풍경을 감상할 수 있습니다.",
        image: "https://images.unsplash.com/photo-1546924976-59c755a1532f?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 3, interest: 2, climate: 1, budget: 2, food: 2, activity: 2, companion: 1, art: 3, transport: 2, vibe: 2 }
    },
    {
        name: "피렌체, 이탈리아",
        locationName: "피렌체 대성당",
        description: "르네상스의 심장, 피렌체에서 다비드 상의 감동과 두오모의 웅장함을 느껴보세요.",
        locationInfo: "브루넬레스키가 설계한 거대한 돔으로 유명하며, 피렌체의 상징적인 랜드마크입니다.",
        image: "https://images.unsplash.com/photo-1502602169002-4c21a4f5f9a6?q=80&w=1974&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 1, budget: 2, food: 1, activity: 1, companion: 2, art: 1, transport: 1, vibe: 1 }
    },
    {
        name: "부다페스트, 헝가리",
        locationName: "국회의사당",
        description: "도나우 강의 진주, 부다페스트의 아름다운 야경과 함께 따뜻한 온천에서 피로를 풀어보세요.",
        locationInfo: "도나우 강변에 위치한 웅장하고 아름다운 건축물로, 부다페스트 야경의 핵심입니다.",
        image: "https://images.unsplash.com/photo-1561044415-43a059d7491d?q=80&w=2070&auto=format&fit=crop",
        scores: { pacing: 2, interest: 1, climate: 2, budget: 1, food: 1, activity: 1, companion: 2, art: 2, transport: 1, vibe: 2 }
    }
];