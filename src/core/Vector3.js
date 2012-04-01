/**
 * @author mcteapot / http://cyborgdino.com/
 */

BOUNCE.Vector3 = function ( x, y, z ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;

};

BOUNCE.Vector3.prototype = {

	constructor: BOUNCE.Vector3,

	set: function ( x, y, z ) {

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	},

	setVector: function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	},

	setX: function ( x ) {

		this.x = x;

		return this;

	},

	setY: function ( y ) {

		this.y = y;

		return this;

	},

	setZ: function ( z ) {

		this.z = z;

		return this;

	},

	clear: function () {

		this.x = 0;
		this.y = 0;
		this.z = 0;

	},

	print: function ( groupName ) {

		console.group( groupName + ":Vector3" );
			console.log( "x: " + this.x );
			console.log( "y: " + this.y );
			console.log( "z: " + this.z );
		console.groupEnd();

	},

	clone: function () {

		return new BOUNCE.Vector3( this.x, this.y, this.z );

	},

	add: function ( v1, v2 ) {

		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;

		return this;

	},

	addUpdate: function ( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	},

	addScaledVector: function ( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	subtract: function ( v1, v2 ) {

		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;

		return this;

	},

	subtractUpdate: function ( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	},

	subtractScaledVector: function ( v, s ) {

		this.x -= v.x * s;
		this.y -= v.y * s;
		this.z -= v.z * s;

		return this;

	}

	multiply: function ( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	},

	multiplyUpdate: function ( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	},

	multiplyScalar: function ( s ) {

		this.x *= s;
		this.y *= s;
		this.z *= s;

		return this;

	},

	divideUpdate: function ( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	},


	divideScalar: function ( s ) {

		if ( s ) {

			this.x /= s;
			this.y /= s;
			this.z /= s;

		} else {

			this.x = 0;
			this.y = 0;
			this.z = 0;

		}

		return this;

	},

	invert: function () {

		return this.multiplyScalar( -1 );

	},

	squareMagnitude: function () {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	},

	magnitude: function () {

		return Math.sqrt( this.squareMagnitude() );

	},

	normalize: function () {

		return this.divideScalar( this.magnitude() );

	},

	componentProduct: function ( v ) {

		return new BOUNCE.Vector3( this.x * v.x , this.y * v.y , this.z * v.z );

	},

	componentProductUpdate: function ( v ) {

		return this.multiplyUpdate( v );

	},

	scalarProduct: function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	},

	dotProduct: function ( v ) {

		return this.scalarProduct( v );

	},

	vectorProduct: function ( v ) {

		this.x = this.y * v.z - this.z * v.y;
		this.y = this.z * v.x - this.x * v.z;
		this.z = this.x * v.y - this.y * v.x;

		return this;

	},

	crossProduct: function ( v ) {

		return this.vectorProduct( v );

	}


};