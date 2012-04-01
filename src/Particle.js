/**
 * @author mcteapot / http://cyborgdino.com/
 */

BOUNCE.Particle = function () {


	this.position = new BOUNCE.Vector3();
	this.velocity = new BOUNCE.Vector3();
    forceAccum = new BOUNCE.Vector3();
	this.acceleration = new BOUNCE.Vector3();

	this.damping;
	this.inverseMass;

};

BOUNCE.Particle.prototype = {

	constructor: BOUNCE.Particle,

	integrate: function ( duration ) {

		if ( duration > 0.0 ) {

			this.position.addScaledVector( this.velocity, duration );

			var resultingAcc = this.acceleration.clone;
			resultingAcc.addScaledVector( this.forceAccum, this.inverseMass );

    		velocity.addScaledVector( resultingAcc, this.duration );

		    velocity.multiplyScalar( Math.pow( this.damping, duration ) );

		    this.clearAccumulator();

		} else {

			console.error( "duration < 0.0" );

		}

	},

	setMass: function ( mass ) {

        if ( mass != 0 ) {

            this.inverseMass = ( 1.0 / mass );

        } else {

            console.error( "mass == 0" );

        }

    },

    mass: function () {

        if ( this.inverseMass ) {

            return ( 1.0 / this.inverseMass );

        } else if ( this.inverseMass === 0 ) {

            return Number.NaN;

        } else {

            console.error( "mass not set")

        }

    },

    setInverseMass: function ( inverseMass ) {

        this.inverseMass = inverseMass;

    },

    hasFiniteMass: function () {
        
        return this.inverseMass >= 0.0;

    },

    setDamping: function ( damping ) {

        this.damping = damping;
    },

    setPosition: function ( x, y, z ) {

        this.position.set( x, y, z );

    },

    setPositionVector: function ( v ) {

        this.position.setVector( v );

    },

    setVelocity: function ( x, y, z ) {

        this.velocity.set( x, y, z );

    },

    setVelocityVector: function ( v ) {

        this.velocity.setVector( v );
        
    },

    setAcceleration: function ( x, y, z ) {

        this.acceleration.set( x, y, z );

    },

    setAccelerationVector: function ( v ) {

        this.acceleration.setVector( v );
        
    },

    clearAccumulator: function () {

        this.forceAccum.clear();

    },

    addForce: function ( v ) {

        this.forceAccum.addUpdate( v );

    }

};