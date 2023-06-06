import React from 'react'
import { colors } from '@redshift-ui/tokens'
import { getContrast } from 'polished'

export default function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    fontFamily: 'monospace',
                    color: getContrast(color, "#fff") < 3.5 ? "#222" : "#fff"
                }}>
                    <strong>${key}</strong>
                    <strong>{color}</strong>
                </div>
            </div>
        )
    })

}

