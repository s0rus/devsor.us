---
title: "Inpost Geowidget Next"
description: "Copy & paste Inpost Geowidget component for Next.js"
repoUrl: "https://github.com/s0rus/inpost-geowidget-next"
weight: 11
---

Fully type-safe copy & paste Inpost Geowidget component for Next.js which you have complete control over.

```tsx
// src/components/inpost-geowidget.tsx

"use client";

import Head from "next/head";
import Script from "next/script";
import * as React from "react";

export type InpostGeowidget = Omit<
  InpostApiMethods,
  "addPointSelectedCallback"
>;

export const InpostGeowidget = React.forwardRef<
  InpostGeowidget,
  InpostGeowidgetProps
>(
  (
    {
      token,
      language = "pl",
      config = "parcelCollect",
      containerProps,
      onPoint,
      ...rest
    },
    ref,
  ) => {
    const geowidgetRef = React.useRef<HTMLElement>(null);
    const _api = React.useRef<InpostGeowidget>();

    const { className: containerPropsClassName, ...containerPropsRest } =
      containerProps ?? {};

    const initGeowidget = React.useCallback(
      function initGeowidget(evt: CustomEvent<InpostInternalApi>) {
        const api = evt.detail.api;
        _api.current = api;
        api.addPointSelectedCallback(onPoint);
      },
      [onPoint, ref],
    );

    React.useEffect(() => {
      const controller = new AbortController();
      const geowidget = geowidgetRef.current;

      if (geowidget) {
        geowidget.addEventListener(
          "inpost.geowidget.init",
          initGeowidget as EventListener,
          {
            signal: controller.signal,
          },
        );
      }

      return () => {
        controller.abort();
      };
    }, [initGeowidget]);

    React.useImperativeHandle(
      ref,
      () => ({
        changeLanguage: (lang) => {
          _api.current?.changeLanguage(lang);
        },
        changePointsType: (type) => {
          _api.current?.changePointsType(type);
        },
        changePosition: (position, zoom) => {
          _api.current?.changePosition(position, zoom);
        },
        changeZoomLevel: (zoom) => {
          _api.current?.changeZoomLevel(zoom);
        },
        clearSearch: () => {
          _api.current?.clearSearch();
        },
        hideSearchResults: () => {
          _api.current?.hideSearchResults();
        },
        search: (query) => {
          _api.current?.search(query);
        },
        selectPoint: (name) => {
          _api.current?.selectPoint(name);
        },
        showPoint: (name) => {
          _api.current?.showPoint(name);
        },
        showPointDetails: (name) => {
          _api.current?.showPointDetails(name);
        },
      }),
      [],
    );

    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://geowidget.inpost.pl/inpost-geowidget.css"
            key="inpost-geowidget-css"
          />
        </Head>
        <Script src="https://geowidget.inpost.pl/inpost-geowidget.js" defer />
        <div className={containerPropsClassName} {...containerPropsRest}>
          <inpost-geowidget
            ref={geowidgetRef}
            token={token}
            language={language}
            config={config}
            {...rest}
          />
        </div>
      </>
    );
  },
);

export interface InpostGeowidgetPoint {
  address: InpostAddress;
  address_details: InpostAddressDetails;
  apm_doubled: string;
  easy_access_zone?: boolean;
  image_url: string;
  location: Location;
  location_24: boolean;
  location_description: string;
  name: string;
  opening_hours: string;
  operating_hours_extended: InpostOperatingHoursExtended;
  partner_id: number;
  payment_point_descr: string;
  payment_type: {
    2?: string;
  };
  physical_type_description: string;
  physical_type_mapped: string;
  recommended_low_interest_box_machines_list: string[];
  type: "parcel_locker" | "parcel_locker_superpop" | "pop";
  virtual: string;
}

export interface InpostGeowidgetProps
  extends React.HTMLAttributes<HTMLDivElement> {
  token: string;
  language?: InpostLanguage;
  config?: InpostConfig;

  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  onPoint: (point: InpostGeowidgetPoint) => void;
}

export type InpostLanguage = "pl" | "en" | "uk";

export type InpostConfig =
  | "parcelCollect"
  | "parcelCollectPayment"
  | "parcelCollect247"
  | "parcelSend";

export type InpostAddress = {
  line1: string;
  line2: string;
};

export type InpostAddressDetails = {
  building_number: string;
  city: string;
  flat_number: string;
  post_code: string;
  province: string;
  street: string;
};

export type InpostFilterPoints = "ALL" | "PARCEL_LOCKER" | "POP";

export type InpostLocation = {
  distance?: number;
  latitude: number;
  longitude: number;
};

export type InpostOpenedHoursRange = {
  end: number;
  start: number;
};

export type InpostOperatingHoursExtended = {
  customer?: {
    monday: InpostOpenedHoursRange;
    tuesday: InpostOpenedHoursRange;
    wednesday: InpostOpenedHoursRange;
    thursday: InpostOpenedHoursRange;
    friday: InpostOpenedHoursRange;
    saturday: InpostOpenedHoursRange;
    sunday: InpostOpenedHoursRange;
  };
};

interface InpostInternalApi {
  api: InpostApiMethods;
}

interface InpostApiMethods {
  addPointSelectedCallback: (
    callback: (point: InpostGeowidgetPoint) => void,
  ) => void;
  changeLanguage: (lang: InpostLanguage) => void;
  changePointsType: (type: InpostFilterPoints) => void;
  changePosition: (position: InpostLocation, zoom?: number) => void;
  changeZoomLevel: (zoom: number) => void;
  clearSearch: () => void;
  hideSearchResults: () => void;
  search: (query: string) => void;
  selectPoint: (name: string) => void;
  showPoint: (name: string) => void;
  showPointDetails: (name: string) => void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "inpost-geowidget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          token: string;
          language: InpostLanguage;
          config: InpostConfig;
        },
        HTMLElement
      >;
    }
  }

  interface GlobalEventHandlersMap {
    onPoint: CustomEvent<InpostGeowidgetPoint>;
  }
}
```
