"use client";
import React from 'react';
import Timer from './Timer';

const styles = {
  bracketContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50vh'
  },
  bracket: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'Arial, sans-serif'
  },
  round: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginRight: '75px',
    marginLeft: '75px'
  },
  match: {
    border: '1px solid #ccc',
    padding: '5px', 
    minWidth: '120px',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center'
  },
  competitor: { 
    flex: 1, 
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: '2px', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.3s'
  },
  lineHorizontal: {
    borderTop: '1px solid black',
    position: 'absolute',
    width: '35px',
    top: '50%',
    backgroundColor: '#333'
  },
  lineFinal: {
    borderTop: '1px solid black',
    position: 'absolute',
    width: '75px',
    top: '50%',
  },
  lineVertical: {
    borderLeft: '1px solid black',
    position: 'absolute',
    height: 'calc(100% + 131px)',
    top: '-111%',
  },
  connector: {
    display: 'flex',
    position: 'relative'
  },
  lineConnector: {
    borderTop: '1px solid black',
    position: 'absolute',
    width: '41px',
    top: '50%',
  }
};

const TorneoSimulado = () => {
  return (
    <div style={styles.bracketContainer}>
      <div>
        <Timer />
        <div style={styles.bracket}>
          {/* Equipos a la izquierda */}
          <div style={styles.round}>
            <div style={styles.match}>
              <div style={styles.competitor}>Ronald</div>
              <div style={styles.competitor}>Jesús</div>
              <div style={{ ...styles.lineHorizontal, right: '-35px' }}></div>
            </div>
            <div style={{ margin: '40px 0' }}></div>
            <div style={styles.match}>
              <div style={styles.competitor}>Pablo</div>
              <div style={styles.competitor}>David</div>
              <div style={{ ...styles.lineHorizontal, right: '-35px' }}></div>
            </div>
          </div>
          {/* Conector */}
          <div style={styles.connector}>
            <div style={{ ...styles.lineConnector, right: '100%' }}></div>
            <div style={styles.match}>
              <div style={styles.competitor}>Semifinal 1</div>
              <div style={{ ...styles.lineVertical, right: '135%' }}></div>
            </div>
            <div style={{ ...styles.lineFinal, left: '100%', height: '170%' }}></div>
          </div>
          {/* Final */}
          <div style={styles.round}>
            <div style={styles.match}>
              <div style={styles.competitor}>Finalista 1</div>
              <div style={styles.competitor}>Finalista 2</div>
            </div>
          </div>
          {/* Conector del lado derecho */}
          <div style={styles.connector}>
            <div style={{ ...styles.lineConnector, left: '100%' }}></div>
            <div style={styles.match}>
              <div style={styles.competitor}>Semifinal 2</div>
              <div style={{ ...styles.lineVertical, left: '135%' }}></div>
            </div>
            <div style={{ ...styles.lineFinal, right: '100%', height: '170%' }}></div>
          </div>
          {/* Equipos a la derecha */}
          <div style={styles.round}>
            <div style={styles.match}>
              <div style={styles.competitor}>Salva</div>
              <div style={styles.competitor}>Eduardo</div>
              <div style={{ ...styles.lineHorizontal, left: '-35px' }}></div>
            </div>
            <div style={{ margin: '40px 0' }}></div>
            <div style={styles.match}>
              <div style={styles.competitor}>Alfredo</div>
              <div style={styles.competitor}>Joaquín</div>
              <div style={{ ...styles.lineHorizontal, left: '-35px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorneoSimulado;