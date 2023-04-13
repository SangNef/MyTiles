import React from 'react';
import './css/walltiles.css';
import { WallTilesData } from "../WallTilesData"
import WallComponent from './WallComponent';
const WallTiles = () => {
    console.log(WallTilesData)
    return (
      <section className="wall-tiles">
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-bathroom-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-bathroom"
              type="button"
              role="tab"
              aria-controls="v-pills-bathroom"
              aria-selected="true"
            >
              Bathroom Wall Tiles
            </button>
            <button
              class="nav-link"
              id="v-pills-kitchen-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-kitchen"
              type="button"
              role="tab"
              aria-controls="v-pills-kitchen"
              aria-selected="false"
            >
              Kitchen Wall Tiles
            </button>
            <button
              class="nav-link"
              id="v-pills-living-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-living"
              type="button"
              role="tab"
              aria-controls="v-pills-living"
              aria-selected="false"
            >
              Livingroom Wall
            </button>
            <button
              class="nav-link"
              id="v-pills-bedroom-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-bedroom"
              type="button"
              role="tab"
              aria-controls="v-pills-bedroom"
              aria-selected="false"
            >
              Bedroom Wall Tiles
            </button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-bathroom"
              role="tabpanel"
              aria-labelledby="v-pills-bathroom-tab"
              tabindex="0"
            >
              {WallTilesData.map((item, index) => (
                <WallComponent 
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  describe={item.describe}
                  rate={item.rate}
                  price={item.price}
                ></WallComponent>
              ))}
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-kitchen"
              role="tabpanel"
              aria-labelledby="v-pills-kitchen-tab"
              tabindex="0"
            >
              kitchen
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-disabled"
              role="tabpanel"
              aria-labelledby="v-pills-disabled-tab"
              tabindex="0"
            >
              disabled
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-living"
              role="tabpanel"
              aria-labelledby="v-pills-living-tab"
              tabindex="0"
            >
              living
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-bedroom"
              role="tabpanel"
              aria-labelledby="v-pills-bedroom-tab"
              tabindex="0"
            >
              bedroom
            </div>
          </div>
        </div>
      </section>
    );
};

export default WallTiles;