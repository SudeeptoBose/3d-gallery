import * as THREE from 'three'
import Experience from "./Experience";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.time = this.experience.time
        this.createPerspectiveCamera()
        this.setOrbitControls()
    }

    createPerspectiveCamera()
    {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspectRatio, 0.1, 1000)
        this.scene.add(this.perspectiveCamera)
        this.perspectiveCamera.position.z = 5
        this.perspectiveCamera.position.y = 35
    }
    
    setOrbitControls()
    {
        // this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls = new FirstPersonControls(this.perspectiveCamera, this.canvas)
        // this.controls.enableDamping = true
        // this.controls.lookAt(0,0,0)
        this.controls.movementSpeed = 5
        this.controls.lookSpeed = 0.005
        this.controls.lookVertical = false
        // this.controls.activeLook =false
        this.controls.mouseDragOn = true
    }
    
    resize()
    {
        this.perspectiveCamera.aspect = this.sizes.aspectRatio
    }
    
    update()
    {
        this.controls.update( this.time.delta * 0.01)
        // console.log(this.perspectiveCamera.position)
        this.perspectiveCamera.updateProjectionMatrix()
    }
}
