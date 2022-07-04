import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 100px 0 100px 0;
  background: #000;
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }

  .rc-tabs-tabpane h2 {
    color: #fff;
    padding: 20px 40px 0;
  }
  .rc-tabs-tab-btn {
    font-weight: bold;
    font-size: 18px;
  }
  .rc-tabs-tabpane h3 {
    color: #fff;
    padding: 10px 0 0 40px;
  }
  .rc-tabs-tabpane p {
    color: #fff;
    padding: 0 40px;
    line-height: 20px;
    font-size: 18px;
  }
  .primary-cta {
    text-decoration: none;
    color: #000;
    margin: -40px 20px 20px;
    font-size: 18px;
    text-transform: uppercase;
    padding: 15px 40px 15px;
    background: linear-gradient(
      90deg,
      rgba(190, 123, 14, 1) 0%,
      rgba(213, 149, 42, 1) 17%,
      rgba(203, 158, 71, 1) 35%,
      rgba(235, 194, 113, 1) 50%,
      rgba(199, 133, 28, 1) 90%,
      rgba(215, 131, 0, 1) 100%
    );
    box-shadow: #000 3px 3px 6px 0;
    position: relative;
    overflow: hidden;
    display: inline-block;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
  }
  .prime-cta {
    text-align: center;
    margin-bottom: 30px;
  }
  @keyframes ScaleInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  ul {
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
  }

  li {
    list-style: none;
    position: relative;
    padding: 10px 0 0 20px;
    color: #fff;
    font-size: 18px;
  }
  li a {
    color: #e9bc66 !important;
    text-decoration: underline;
  }
  .update-screen-tab {
    border: 0;
    overflow: initial;
    .rc-tabs-ink-bar {
      display: none !important;
    }
    .rc-tabs-bar {
      border: 0;
    }
    .rc-tabs-nav-container,
    .rc-tabs-nav-wrap {
      margin-bottom: 45px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      @media (max-width: 767px) {
        margin-bottom: 30px;
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background: #e7e8eb;
        display: block;
        left: 0;
        bottom: 0;
        z-index: -1;
      }
      &:not(.rc-tabs-nav-container-scrolling) {
        .rc-tabs-nav-scroll,
        .rc-tabs-nav-list {
          width: 100%;
          text-align: center;
          justify-content: center;
          @media (max-width: 767px) {
            flex-wrap: wrap;
          }
          .rc-tabs-nav {
            float: none;
            display: block;

            .rc-tabs-tab {
              display: inline-block;
              float: none;
            }
          }
        }
      }
      .rc-tabs-tab {
        font-size: 18px;
        color: #e9bc66;
        font-weight: 400;
        min-width: 230px;
        padding: 10px 0 10px 0;
        text-align: center;
        background: transparent !important;
        transition: 0.25s ease-in-out;
        display: inline-block;
        border: 1px solid #e9bc66;
        float: none;
        &:hover {
          color: #e29821;
        }
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          display: block;
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:after {
          background: #e29821;
          transform: scaleX(0);
          transform-origin: right center 0;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
        &.rc-tabs-tab-active {
          color: #000;
          background: #e9bc66 !important;

          &:after {
            transform: scaleX(1);
            transform-origin: left center 0;
            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
          }
        }
        > div {
          margin-right: 8px;
          i {
            margin-right: 5px;
            @media (max-width: 767px) {
              margin-right: 7px;
            }
          }
        }
        @media (max-width: 1199px) {
          font-size: 16px;
          padding: 0 0 20px 0;
          min-width: 170px;
        }
        @media (max-width: 990px) {
          min-width: auto;
          padding: 0 20px 15px 20px;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          max-width: 50%;
          svg {
            width: 20px;
          }
        }
      }
      &::before {
        border: 0;
      }
    }
    .rc-tabs-content {
      .rc-tabs-tabpane {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 5px 60px 0px rgba(27, 67, 111, 0.15);
        &.rc-tabs-tabpane-active {
          animation: 0.7s ScaleInUp;
        }
        > img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
    .container {
      padding: 10px;
    }
    .primary-cta {
      margin: 0 20px 20px !important;
      font-size: 14px !important;
      padding: 10px 15px !important;
    }
    .rc-tabs-tab-btn {
      font-weight: bold;
      font-size: 12px;
    }
    .update-screen-tab .rc-tabs-nav-wrap .rc-tabs-tab {
      min-width: auto;
      padding: 0 10px 0 10px;
    }
  }
  .rc-tabs-nav-operations {
    display: none;
  }
  .update-screen-tab .rc-tabs-nav-wrap .rc-tabs-tab > div {
    margin-right: 0;
  }
`;

export default SectionWrapper;
