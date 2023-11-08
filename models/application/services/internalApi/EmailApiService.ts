import { AbstractInternalApiService } from '@/models/application/services/internalApi/AbstractInternalApiService';

export class EmailApiService extends AbstractInternalApiService {
  async unsubscribe(token: string): Promise<any> {
    await this.executePostQuery<any>(`/unsubscribe`, {
      token,
    });
  }
}
