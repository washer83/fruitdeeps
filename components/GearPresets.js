import React, { Component } from 'react';
import defaultGearSets from '../src/defaultGearSets';

export class GearPresets extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedPreset: defaultGearSets[0] };
        this.handleChange = this.handleChange.bind(this);
        this.applyPreset = this.applyPreset.bind(this);
    }

    handleChange(event) {
        const selectedPreset = defaultGearSets.find(gear => gear.name === event.target.value);
        this.setState({ selectedPreset });
    }

    applyPreset() {
        const { selectedPreset } = this.state;
        const player = { ...this.props.player, equipment: selectedPreset.equipment };
        this.props.setPlayer(player);
    }

    render() {
        return (
            <div className="highlight-section flex-container-vertical">
                <h3>Gear Presets</h3>
                <select onChange={this.handleChange} value={this.state.selectedPreset.name}>
                    {defaultGearSets.map((gear, index) => (
                        <option key={index} value={gear.name}>{gear.name}</option>
                    ))}
                </select>
                <button onClick={this.applyPreset}>Apply Preset</button>
            </div>
        );
    }
}
