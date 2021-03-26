{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string; // 실제 비디오 데이터
  };

  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    // Video 리턴
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    // 선택적 데이터만 리턴
    return {
      id: id,
      title: 'title',
    };
  }
}
