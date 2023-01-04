import {useEffect, useRef, HTMLAttributes} from 'react';
import gaussianBackgroundGenerator, {
    GaussianBackground as GaussianBackgroundType,
    Layer,
    Options,
} from 'gaussian-background-generator';
import styled from '@emotion/styled';

export interface GaussianBackgroundProps extends HTMLAttributes<HTMLDivElement>{
    layers?: Layer[];
    options?: Options;
    /** 建议取实际值的十分之一左右 */
    renderWidth?: number;
    /** 建议取实际值的十分之一左右 */
    renderHeight?: number;
    canvasProps?: HTMLAttributes<HTMLCanvasElement>;
}

const defaultLayers: Layer[] = [
    {orbs: 4, radius: 20, maxVelocity: 0.5, color: '#f0f4ff'}, // info 97:#f0f4ff 98:#f5f8ff
    {orbs: 5, radius: 15, maxVelocity: 0.5, color: '#e5edff'}, // info-light-95
    {orbs: 6, radius: 10, maxVelocity: 0.5, color: '#f0fbff'}, // cyan 97:#f0fbff 98:#f5fdff
    {orbs: 6, radius: 10, maxVelocity: 0.5, color: '#f9f0ff'}, // purple 97:#f9f0ff 98:#fbf5ff
    {orbs: 6, radius: 10, maxVelocity: 0.5, color: '#fff0f7'}, // magenta 97:#fff0f7 98:#fff5f9
    {orbs: 6, radius: 10, maxVelocity: 0.5, color: '#fffbf0'}, // gold 97:#fffbf0 98:#fffdf5
    {color: '#e5edff'},
];

const Container = styled.div`
    position: relative;
    overflow: hidden;
`;

const StyledCanvas = styled.canvas`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const Content = styled.div`
    position: relative;
`;

const getMergedOptions = (renderWidth?: number, renderHeight?: number, options?: Options): Options => {
    // 默认 5:3 横幅
    return {
        renderWidth: renderWidth ?? options?.renderWidth ?? 100,
        renderHeight: renderHeight ?? options?.renderHeight ?? 60,
        blurRadius: options?.blurRadius ?? 15,
        fpsCap: options?.fpsCap ?? 15,
    };
};

const GaussianBackground = ({
    layers = defaultLayers,
    options,
    renderWidth,
    renderHeight,
    canvasProps,
    children,
    ...props
}: GaussianBackgroundProps) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const generatorRef = useRef<ReturnType<GaussianBackgroundType> | null>(null);

    useEffect(
        () => {
            if (ref.current && !generatorRef.current) {
                const nextOption = getMergedOptions(renderWidth, renderHeight, options);
                generatorRef.current = gaussianBackgroundGenerator(ref.current, layers, nextOption);
            }
        },
        [layers, options, renderHeight, renderWidth]
    );

    return (
        <Container {...props}>
            <StyledCanvas ref={ref} {...canvasProps} />
            <Content>{children}</Content>
        </Container>
    );
};

export default GaussianBackground;
