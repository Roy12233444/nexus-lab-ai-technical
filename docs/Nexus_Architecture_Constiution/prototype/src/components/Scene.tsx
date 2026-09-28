import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DottedMatrixPoints from './DottedMatrixPoints';

export default function Scene() {
  const [activity, setActivity] = useState(0.5);
  const [audioLevel, setAudioLevel] = useState(0.3);
  const [pramanaSync, setPramanaSync] = useState(0.8);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#FFFFFF' }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <color attach="background" args={['#FFFFFF']} />
        <DottedMatrixPoints 
          pointCount={10000} // Fewer points for better visibility
          activity={activity}
          audioLevel={audioLevel}
          pramanaSync={pramanaSync}
        />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Math Parameter Controls */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        fontFamily: 'monospace',
        minWidth: '250px',
        zIndex: 1000
      }}>
        <h3 style={{ marginBottom: '15px', color: '#00F0FF' }}>Shader Math Controls</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Activity (0-2): {activity.toFixed(2)}
          </label>
          <input 
            type="range" 
            min="0" 
            max="2" 
            step="0.1" 
            value={activity}
            onChange={(e) => setActivity(parseFloat(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Audio Level (0-1): {audioLevel.toFixed(2)}
          </label>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            value={audioLevel}
            onChange={(e) => setAudioLevel(parseFloat(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Pramana Sync (0-1): {pramanaSync.toFixed(2)}
          </label>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            value={pramanaSync}
            onChange={(e) => setPramanaSync(parseFloat(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
        
        <div style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>
          Adjust these values to test different shader math states
        </div>
      </div>
    </div>
  );
}
