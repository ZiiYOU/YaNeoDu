import axios from 'axios';
import { NextResponse } from 'next/server';

const API_ENDPOINT = 'http://openapi.q-net.or.kr/api/service/rest/InquiryListNationalQualifcationSVC';
// const AUTH_KEY = 'hyFIis06ihoF6wuUVRVla34zSMTW5PQOSnPEjdRcJqQaEnVyS+wQlhOxlV4YNtcMC7EznYqd+20C5T2gE80KGA==';

const TOTAL_LICENSE = 1000;

export const GET = async (request: Request) => {
  try {
    const allLicenses = Array.from({ length: TOTAL_LICENSE }, (_, index) => {
      const id = index + 1;
      return axios.get(API_ENDPOINT);
    });

    const allLicenseResponses = await Promise.all(allLicenses);

    console.log(allLicenseResponses);

    return NextResponse.json(allLicenseResponses);
  } catch (error) {
    return NextResponse.json({ error: 'failed to fetch data' });
  }
};
