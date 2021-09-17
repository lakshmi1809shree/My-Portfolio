import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../config/particle-config'
function ParticleBackground() {
    return (
        <Particles params={particlesConfig}></Particles>
    )
}

export default ParticleBackground
