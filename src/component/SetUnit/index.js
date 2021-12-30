import React, { Component } from 'react'

export default class SetUnit extends Component {
    render() {
        return (
            <div className="uppercase font-bold">
                <h3>Units</h3>
                <select>
                    <option>Celsius</option>
                    <option>Degree</option>
                </select>
            </div>
        )
    }
}
