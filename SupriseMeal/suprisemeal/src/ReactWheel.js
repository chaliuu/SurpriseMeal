// JavaScript source code
import WheelComponent from "react-wheel-of-prizes";

const ReactWheel = () => {
    const segments = [
        "Better luck ",
        "10% off",
        "5% off",
        "Better luck ",
        "20% off",
        "15% off",
        "ffdf"
    ];
    const segColors = [
        "red",
        "black",
        "red",
        "black",
        "red",
        "black"
    ];
    const onFinished = (winner) => {
        console.log(winner);
    };
    return (
            <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    winningSegment="MM"
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor="black"
                    contrastColor="white"
                    buttonText="Start"
                    isOnlyOnce={false}
                    size={190}
                    upDuration={500}
                    downDuration={600}
                    fontFamily="Helvetica"
               />
    );
}
export default ReactWheel;