class Barn{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-entity");

        //main body
        let body = document.createElement("a-box");
        this.obj.append(body);

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        scene.append(this.obj);
    }
}