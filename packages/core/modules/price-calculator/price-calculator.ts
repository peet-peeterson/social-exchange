import { Injectable } from '@nestjs/common';
import { OfferConstructorOptions, OfferType } from '@social-exchange/types';

@Injectable()
export class PriceCalculator {
    calculate(options: OfferConstructorOptions) {
        type Prices = { [key in OfferType]: number }
        const prices: Prices = {
            [OfferType.likes]: 1,
            [OfferType.reposts]: 2,
            [OfferType.followers]: 3,
            [OfferType.subscribes]: 4,
        };

        return prices[options.type] * options.count;
    }
};
