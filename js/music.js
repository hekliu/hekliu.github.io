const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,            <!-- 不启用迷你播放模式 -->
    autoplay: false,        <!-- 音频不自动播放 -->
    theme: '#FADFA3',       <!-- 主题色 -->
    loop: 'all',            <!-- 音频循环播放, 可选值: 'all', 'one', 'none'-->
    order: 'list',          <!-- 音频循环顺序, 可选值: 'list', 'random'-->
    preload: 'auto',        <!-- 预加载，可选值: 'none', 'metadata', 'auto'-->
    volume: 0.8,            <!-- 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效-->
    mutex: true,            <!-- 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 -->
    listFolded: false,      <!-- 列表默认折叠， false表示不折叠-->
    listMaxHeight: '120px', <!-- 列表最大高度，超出此高度将有滚动条-->
    lrcType: 0,             <!-- 歌词类型，0表示不显示歌词-->
    audio: [
        {
            name: 'Epic Score - Liberators',    <!-- 歌曲名称-->
            artist: 'Vengeance',                <!-- 歌曲作者-->
            url: '/music/Liberators.mp3',       <!-- 歌曲路径-->
            cover: '/music/Liberators.png',     <!-- 歌曲封面图片-->
            theme: '#46718b'                    <!-- 选中歌曲的主题-->
        },
		{
            name: 'Two Steps From Hell - Victory',    <!-- 歌曲名称-->
            artist: 'Two Steps From Hell',            <!-- 歌曲作者-->
            url: '/music/Victory.mp3',                <!-- 歌曲路径-->
            cover: '/music/Victory.png',              <!-- 歌曲封面图片-->
            theme: '#46718b'                          <!-- 选中歌曲的主题-->
        }
    ]
});
