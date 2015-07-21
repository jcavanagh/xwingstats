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

/**
 * Computes the mean of a set
 *
 * @param  {Array}  set  A set of numbers
 * @return {Number}      The mean
 */
export function mean(set) {
	return _.reduce(set, function(t, n) { return t + n; }) / set.length;
}

/**
 * Computes the median of a set
 *
 * @param  {Array}  set  A set of numbers
 * @return {Number}      The median
 */
export function median(set) {
	var sorted = set.sort();

	if(set.length % 2 === 0) {
		var first = set[set.length / 2];
		var second = set[(set.length / 2) + 1];

		return mean([first, second]);
	} else {
		return set[Math.floor(set.length / 2)];
	}
}

/**
 * Computes the variance of a sample
 *
 * @param  {Array}  sample Sample
 * @return {Number}        Sample variance
 */
export function variance(sample) {
	var avg = mean(sample);
	var sigma = _.reduce(sample, function(sum, val) {
		return sum + Math.pow((val - avg), 2);
	}, 0);

	return (1 / (sample.length - 1)) * sigma;
}

/**
 * Computes the standard deviation of a sample
 *
 * @param  {Array}  sample Sample
 * @return {Number}        Sample standard deviation
 */
export function stdDev(sample) {
	return Math.sqrt(variance(sample));
}