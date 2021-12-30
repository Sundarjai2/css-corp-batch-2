import React, { PureComponent, createRef, lazy, Suspense } from 'react';
const Input = lazy(() => import('./component/Input'));
const SearchResult = lazy(() => import('./component/SearchResult'));
const SetUnit = lazy(() => import('./component/SetUnit'));
const WeatherReport = lazy(() => import('./component/WeatherReport'));
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container mx-auto px-4">
        <h1 className="my-2 text-lg font-bold border-b-2 border-orange-600">WeatherWatch</h1>
        <div className="flex flex-row">
          <div className="basis-3/4">
            <Suspense fallback={<h1>Loading...</h1>}>
              <Input />
            </Suspense>
          </div>
          <div className="basis-1/4">
            <Suspense fallback={<h1>Loading...</h1>}>
              <SetUnit />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <SearchResult />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <WeatherReport />
        </Suspense>
      </div>
    );
  }
}
