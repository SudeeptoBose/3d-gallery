import * as THREE from 'three'
import Experience from '../Experience'

export default class Model{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        this.duck = this.assets.model.scene
        this.artGallery = this.assets.gallery
        this.gallery = this.artGallery.scene
        this.time = this.experience.time
        console.log(this.assets)
        this.setModel()
        // this.setMesh()
        // this.setMeshAnimation()

    }

    setModel()
    {
        this.scene.add(this.gallery)
        this.gallery.scale.set(10,10,10)
        // this.duck.position.x = 1
        this.gallery.position.y = -0.5
    }

    setMesh()
    {
        const geometry = new THREE.OctahedronGeometry(1, 30);
        const material = new THREE.MeshStandardMaterial( { 
            map: this.assets.baseColor,
            aoMap: this.assets.ambientOcclusion,
            displacementMap: this.assets.heightMap,
            displacementScale: 0.1,
            normalMap: this.assets.normalMap,
            roughnessMap:this.assets.roughnessMap,
            color: 0x00ff00 
        } );
        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add( this.mesh );
        this.mesh.position.x = -1
    }
    
    setMeshAnimation()
    {
        
    }

    resize()
    {

    }

    update()
    {
        // this.mesh.rotation.y += 0.01
    }
}
