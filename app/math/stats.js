import _ from 'lodash';

/**
 * Computes the factorial of N
 *
 * @param  {Number} n A number
 * @return {Number}   The factorial of that number
 */
export function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

/**
 * From a set of size n, return number of distinct subsets of size k
 * Positive integers only
 *
 * @param  {Number} n Set size
 * @param  {Number} k Subset size
 * @return {Number}   Number of distinct subsets
 */
export function binomialCoeff(n, k) {
    if(k === 0 || n === k) {
        return 1;
    }

    if(k > n) {
        return 0;
    }

    return factorial(n) / (factorial(k) * factorial(n - k));
}

/**
 * Performs a binomial experiment, to find the probability of K successes in N trials
 * Given probabilities for success and failure
 *
 * @param  {Number} n Number of trials
 * @param  {Number} k Desired number of successes
 * @param  {Number} p Probability of success
 * @param  {Number} q Probability of failure
 * @return {Number}   Probability of N successes
 */
export function binomialExperiment(n, k, p, q) {
	return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(q, n - k);
}