import { CalculatePi } from "calculate-pi";
import React, { useEffect, useState } from "react";
import { Button, Content, Slider, Switch } from "@felipage/react-ui";
import CodeMatch from "../components/CodeMatch";

const IndexPage = () => {
    const [steps, setSteps] = useState(1);
    const [autoClick, setAutoClick] = useState(false);

    const [gregoryLeibnizSeries] = useState(
        new CalculatePi.GregoryLeibnizSeries()
    );
    const [nilakanthaSeries] = useState(new CalculatePi.NilakanthaSeries());
    const [riemannZetaFunction] = useState(
        new CalculatePi.RiemannZetaFunction()
    );

    const [gregoryLeibnizSeriesValue, setGregoryLeibnizSeriesValue] = useState(
        gregoryLeibnizSeries.pi
    );
    const [nilakanthaSeriesValue, setNilakanthaSeriesValue] = useState(
        nilakanthaSeries.pi
    );
    const [riemannZetaFunctionValue, setRiemannZetaFunctionValue] = useState(
        riemannZetaFunction.pi
    );

    const [gregoryLeibnizSeriesSteps, setGregoryLeibnizSeriesSteps] = useState(
        gregoryLeibnizSeries.steps
    );
    const [nilakanthaSeriesSteps, setNilakanthaSeriesSteps] = useState(
        nilakanthaSeries.steps
    );
    const [riemannZetaFunctionSteps, setRiemannZetaFunctionSteps] = useState(
        riemannZetaFunction.steps
    );

    const addSteps = (first = false) => {
        gregoryLeibnizSeries.step(steps);
        nilakanthaSeries.step(first ? 0 : steps);
        riemannZetaFunction.step(steps);
        setGregoryLeibnizSeriesValue(gregoryLeibnizSeries.pi);
        setNilakanthaSeriesValue(nilakanthaSeries.pi);
        setRiemannZetaFunctionValue(riemannZetaFunction.pi);
        setGregoryLeibnizSeriesSteps(gregoryLeibnizSeries.steps);
        setNilakanthaSeriesSteps(nilakanthaSeries.steps);
        setRiemannZetaFunctionSteps(riemannZetaFunction.steps);
    };

    useEffect(() => {
        addSteps(true);
    }, []);

    useEffect(() => {
        let stepper: NodeJS.Timeout;
        if (autoClick) stepper = setInterval(() => addSteps(), 0);
        return () => {
            stepper && clearInterval(stepper);
        };
    }, [autoClick, steps]);

    return (
        <div>
            <Content>
                <div className="mt-3">
                    <h1>Calculate Pi</h1>
                    <div className="controls">
                        <Button size="small" onClick={() => addSteps()}>
                            Add Steps
                        </Button>
                        <div className="flex flex-col mt-3">
                            <Switch
                                label="Auto Click"
                                onChange={setAutoClick}
                            />
                            <Slider
                                label={`Steps: ${steps}`}
                                min={1}
                                max={10000}
                                onChange={setSteps}
                                value={steps}
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl">Gregory Leibniz Series</h2>
                        <p>Steps: {gregoryLeibnizSeriesSteps}</p>
                        <p>
                            Pi:{" "}
                            <CodeMatch
                                code={gregoryLeibnizSeriesValue.toString()}
                                match={Math.PI.toString()}
                            />
                        </p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl">Nilakantha Series</h2>{" "}
                        <p>Steps: {nilakanthaSeriesSteps}</p>
                        <p>
                            Pi:{" "}
                            <CodeMatch
                                code={nilakanthaSeriesValue.toString()}
                                match={Math.PI.toString()}
                            />
                        </p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl">Riemann Zeta Function</h2>
                        <p>Steps: {riemannZetaFunctionSteps}</p>
                        <p>
                            Pi:{" "}
                            <CodeMatch
                                code={riemannZetaFunctionValue.toString()}
                                match={Math.PI.toString()}
                            />
                        </p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl">Actual Pi</h2>
                        <p>
                            Pi:{" "}
                            <CodeMatch
                                code={Math.PI.toString()}
                                match={Math.PI.toString()}
                            />
                        </p>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default IndexPage;
