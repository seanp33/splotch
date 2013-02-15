define([],
    function () {

        function initShape(size) {
            var shape = new THREE.Shape();
            shape.moveTo(0, 0);
            shape.lineTo(0, size.width);
            shape.lineTo(size.length, size.width);
            shape.lineTo(size.length, 0);
            shape.lineTo(0, 0);
            return shape;
        }

        function initMat(matConfig) {
            return new THREE.LineBasicMaterial(matConfig);
        }

        function Avatar(size, position, matConfig, scene) {
            this.size = size;
            this.position = position;
            this.matConfig = matConfig;
            this.scene = scene;
            this.line = null;
            this.material = null;
        }

        Avatar.prototype.init = function () {
            var points = initShape(this.size).createPointsGeometry();
            this.material = initMat(this.matConfig);
            this.line = new THREE.Line(points, this.material);
            this.line.position = this.position;
            this.line.rotation.set(Math.PI / 2, 0, 0);
            this.line.scale.set(1,1,1);
            this.scene.add(this.line);
        }

        return Avatar;
    }
);
