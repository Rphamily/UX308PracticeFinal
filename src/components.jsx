import { hello, sqFeetToAcres, mowLawn, airQuality, yeeHa, slope } from './functions.js';

function Question1(){
    return <section>
      <h2>1. Hello name</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
        <h2>2. Square Feet to Acres</h2>
        <p>100000 sq ft = {sqFeetToAcres(100000).toFixed(2)} acres</p>
        <p>43560 sq ft = {sqFeetToAcres(43560).toFixed(2)} acres</p>
        <p>21780 sq ft = {sqFeetToAcres(21780).toFixed(2)} acres</p>
    </section>;
}

function Question3(){
    return <section>
        <h2>3. Lawn Mowing Time</h2>
        <p>10x20 at 5 m²/min = {mowLawn(10, 20, 5)} mins</p>
        <p>25x30 at 10 m²/min = {mowLawn(25, 30, 10)} mins</p>
        <p>40x50 at 20 m²/min = {mowLawn(40, 50, 20)} mins</p>
    </section>;
}

function Question4(){
    return <section>
        <h2>4. Air Quality</h2>
        <p>AQI 30: {airQuality(30)}</p>
        <p>AQI 75: {airQuality(75)}</p>
        <p>AQI 120: {airQuality(120)}</p>
        <p>AQI 180: {airQuality(180)}</p>
        <p>AQI 250: {airQuality(250)}</p>
        <p>AQI 350: {airQuality(350)}</p>
    </section>;
}

function Question5(){
    return <section>
        <h2>5. Yee Ha</h2>
        <p>3: {yeeHa(3)}</p>
        <p>7: {yeeHa(7)}</p>
        <p>21: {yeeHa(21)}</p>
        <p>8: {yeeHa(8)}</p>
    </section>;
}

function Question6(){
    return <section>
        <h2>6. Slope</h2>
        <p>(1,1) to (2,2): {slope(1,1,2,2)}</p>
        <p>(0,0) to (3,6): {slope(0,0,3,6)}</p>
        <p>(5,2) to (8,8): {slope(5,2,8,8)}</p>
    </section>;
}

export { Question1, Question2, Question3, Question4, Question5, Question6 };


