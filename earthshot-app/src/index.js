import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme, Container, Grid, Box, Typography } from "@mui/material";

const content = [
  {
    color: '#9B7A01',
    boxNumber: '1',
    titleText: '30% = Food & ag.',
  },
  {
    color: '#DA5B38',
    boxNumber: '2',
    titleText: '10% = healthcare.',
  },
  {
    color: '#58B9EA',
    boxNumber: '3',
    titleText: '25% = water.',
  },
  {
    color: '#373E02',
    boxNumber: '4',
    titleText: '30% = energy.',
  },
  {
    color: '#FFAB0F',
    boxNumber: '5',
    titleText: '3% = housing.',
  },
  {
    color: '#4CBB17',
    boxNumber: '6',
    titleText: '5% = environment.',
  },
  {
    color: '#9F00FF',
    boxNumber: '7',
    titleText: '2% = economic.',
  },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div
    style={{
      backgroundColor: "#1d1d1d",
      height: "95vh",
      width: "95vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
      color: "white",
      padding: "8px",
    }}
  >
    <div
      style={{
        width: "25%",
        padding: "8px",
        borderRadius: "12px",
        backgroundColor: "black",
      }}
    >
      <div>Bad Outcome #1</div>
      <Typography variant="h6">900M = malnutrition.</Typography>
      <div style={{ marginBottom: "8px" }}>Globally, 1 in 3 ≠ safe drinking water, mostly ≠ LDC's. </div>
      <div
        style={{
          borderRadius: "12px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "8px",
              width: "40px",
              backgroundColor: "green",
              borderRadius: "15%",
              marginRight: "4px",
            }}
          />
          <div
            style={{
              height: "8px",
              width: "40px",
              backgroundColor: "green",
              borderRadius: "15%",
              marginRight: "4px",
            }}
          />
          <div
            style={{
              height: "8px",
              width: "40px",
              backgroundColor: "green",
              borderRadius: "15%",
              marginRight: "4px",
            }}
          />
        </div>
      </div>
      <div style={{ marginBottom: "8px" }}>SUMMARY</div>
      <div style={{ marginBottom: "8px" }}>Inaction cost: &#123;xx&#125;, &#123;yy&#125; QALY's, &#123;zz&#125; monetary.</div>
      <div style={{ marginBottom: "8px" }}>Cost to solve problem now: &#123;xx&#125; people, &#123;yy&#125; investment, &#123;zz&#125; opportunity cost v. others.</div>
      <div style={{ marginBottom: "8px" }}>Opportunity for innovation: Reduce cost by &#123;xx%&#125; by fixing &#123;1, 2, 3&#125;, improving ROI by &#123;yy&#125; per $ + hr spent.</div>
      <div style={{ marginBottom: "8px" }}>Gap: Technologies & operation risk. High CapEx.</div>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      {content.map((item) => (
        <div
          style={{
            backgroundColor: item.color,
            borderRadius: "12px",
            padding: "8px",
          }}
        >
          <div style={{ marginBottom: "8px" }}> Bucket #{item.boxNumber}</div>
          <div style={{ marginBottom: "8px" }}>{item.titleText}</div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: "8px",
                width: "40px",
                backgroundColor: "green",
                borderRadius: "15%",
                marginRight: "4px",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "40px",
                backgroundColor: "green",
                borderRadius: "15%",
                marginRight: "4px",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "40px",
                backgroundColor: "green",
                borderRadius: "15%",
                marginRight: "4px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>,
  // rootElement
);

