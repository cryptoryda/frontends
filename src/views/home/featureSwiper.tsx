import { Box, Typography, Divider } from "@mui/material";

import { styled } from "@mui/system";
import SecurityIcon from "@/assets/images/homepage/home/security.png";
import ScalabilityIcon from "@/assets/images/homepage/home/scalability.png";
import EVMEquivalenceIcon from "@/assets/images/homepage/home/EVM-equivalence.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const FeatureBox = styled(Box)(
  ({ theme }) => `
        width: 38rem;
        height: 54rem;
        background: #ffffff;
        border-radius: 5px;
        ${theme.breakpoints.down("md")} {
            width: 91.8vw;
            max-width: 35.8rem;
            height: 44rem;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            margin: 1.4rem auto 6rem;
        };
    `
);

const FeatureIcon = styled("img")(
  ({ theme }) => `
           height: 9.6rem;
           margin: 4.4rem auto;
          `
);

const FeatureTitle = styled(Typography)(
  ({ theme }) => `
        margin-top: 6.5rem;
        margin-bottom: 0.9rem;
        text-align: center;
        font-weight: 600;
        color: ${theme.palette.text.primary};
        ${theme.breakpoints.down("md")} {
            margin-top: 3.6rem;
        };
        `
);

const FeatureDescription = styled(Typography)(
  ({ theme }) => `
          margin: 0 3.5rem;
          ${theme.breakpoints.down("md")} {
            margin: 0 2.4rem;
        };
        `
);

const features = [
  {
    icon: SecurityIcon,
    title: "Security",
    description:
      "Scroll's protocol is currently undergoing multiple third-party audits to ensure security. Scroll also values transparency and is working to build its platform openly and in collaboration with the community.",
  },
  {
    icon: ScalabilityIcon,
    title: "Scalability",
    description:
      "Scroll processes transactions off-chain, and posts succinct proofs of correctness on-chain. This results in higher throughput and lower costs in comparison to the Ethereum base layer.",
  },
  {
    icon: EVMEquivalenceIcon,
    title: "EVM Equivalence",
    description:
      "Developing on Scroll feels the same as developing on Ethereum. Any EVM-compatible smart contract can be effortlessly deployed to Scroll's network.",
  },
];

const FeatureSwiper = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box className={isDesktop ? "wrapper" : ""}>
      <Swiper
        slidesPerView={isDesktop ? 3 : 1.08}
        spaceBetween={isDesktop ? 0 : 8}
        centeredSlides={!isDesktop}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.icon}>
            <FeatureBox>
              <FeatureIcon src={feature.icon} />
              <Divider />
              <FeatureTitle variant="subtitle1">{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FeatureSwiper;