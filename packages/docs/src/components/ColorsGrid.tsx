import { colors } from '@redshift-ui/tokens'
import React from 'react'

export default function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    fontFamily: 'monospace',
                    color: "#fff"
                }}>
                    <strong>${key}</strong>
                    <strong>{color}</strong>
                </div>
            </div>
        )
    })

}

