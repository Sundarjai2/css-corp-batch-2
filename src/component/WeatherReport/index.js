import React, { Component } from 'react'

export default class WeatherReport extends Component {
    render() {
        return (
            <div>
                <div class="flex flex-wrap text-white text-center uppercase justify-evenly">
                    <div class="basis-2/6 rounded-lg bg-purple-800 h-20 border-2">01 hi</div>
                    <div class="basis-2/6 rounded-lg bg-purple-800 h-20 border-2">02</div>
                    <div class="basis-2/6 rounded-lg bg-purple-800 h-20 border-2">03</div>
                    <div class="basis-3/6 rounded-lg bg-purple-800 h-20 border-2">04</div>
                    <div class="basis-3/6 rounded-lg bg-purple-800 h-20 border-2">05</div>
                    <div class="basis-3/6 rounded-lg bg-purple-800 h-20 border-2">06</div>
                    <div class="basis-3/6 rounded-lg bg-purple-800 h-20 border-2">07</div>
                </div>
            </div>
        )
    }
}
