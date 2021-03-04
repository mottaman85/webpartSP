import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';

export interface IHolaMundoProps {
  description: string;
  name: string;
  visible: boolean;
  subtitle: string;
  string: IHolaMundoWebPartStrings;
  sPHttpClient: SPHttpClient;
  urlAbs: string;
}
