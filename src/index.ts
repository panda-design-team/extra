import gaussianBackgroundGenerator, {
    GaussianBackground as GaussianBackgroundType,
    Layer as GaussianBackgroundLayer,
    Options as GaussianBackgroundOptions,
    BlurMethod as  GaussianBackgroundBlurMethod,
} from 'gaussian-background-generator';
import GaussianBackground, {GaussianBackgroundProps} from './gaussian-background';

export type {
    GaussianBackgroundBlurMethod,
    GaussianBackgroundProps,
    GaussianBackgroundType,
    GaussianBackgroundLayer,
    GaussianBackgroundOptions
}

export {
    gaussianBackgroundGenerator,
    GaussianBackground
}
