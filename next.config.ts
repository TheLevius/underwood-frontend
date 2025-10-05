import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

const withVanillaExtract = createVanillaExtractPlugin();
const withNextIntlPlugin = createNextIntlPlugin();
const withBundleAnalyzer = bundleAnalyzer({
	enabled: false,
});
const nextConfig: NextConfig = {};

export default withNextIntlPlugin(
	withVanillaExtract(withBundleAnalyzer(nextConfig))
);
