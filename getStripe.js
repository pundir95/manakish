import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51QNuczB7I7laMhIQdFVCOUMcrIYnMq0ybyyR8qMbPwrrObLr6zEiUx4aIWv9T2MhveFz51OFB5VL0FM2d75DNHWS00ndkvc0c8");
  }
  return stripePromise;
};

export default getStripe;