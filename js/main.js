
// Scene 場景
const scene = new THREE.Scene();

//Object 可以是幾何體 粒子 光線
const geometry = new THREE.BoxGeometry(1, 1, 1); // 正方形
const material = new THREE.MeshBasicMaterial({color: 0xff0000}) // 材質 (先添加顏色)

// Mesh 網格是一個可以由很多頂點組成的, 在3D建模軟體就是建立物件的基本, 兩個點就是線, 三個點就是面
// 在Three.js中是一個函數, 參數可以帶入geometry和material
// 如果用軟體的形容, Mesh的形狀取決於geometry參數, 材質則取決於material
const mesh = new THREE.Mesh(geometry, material);

//在場景中新增剛剛建立的網格
scene.add(mesh);

// Camera 最後Render時會用這個視角來觀看場景 參數為視角 , 長寬比
const size = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

// 如果我們不設定位置的話, 相機位置會與Object重疊, 這樣是看不到任何東西
camera.position.z = 3;
camera.position.x = 1;


// 渲染器 將圖型渲染出的函式
const canvas = document.querySelector('.demo');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// 設定渲染器大小, 使用剛剛size的值
renderer.setSize(size.width, size.height);

// 調用 render 方法並將 scene 和 camera 作為參數
renderer.render(scene, camera);