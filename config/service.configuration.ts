import { Transport } from '@nestjs/microservices';

export enum ServiceName {
  AUTH = 'auth_service',
}

export default () => ({
  services: {
    ['api-gateway']: {
      port: parseInt(process.env.SERVICE_API_GATEWAY_PORT) || 3000,
    },
    auth: {
      name: ServiceName.AUTH,
      transportOptions: {
        transport: Transport.RMQ,
        options: {
          urls: [process.env.SERVICE_RMQ_URL],
          queue: ServiceName.AUTH,
        },
      },
    },
  },
});
