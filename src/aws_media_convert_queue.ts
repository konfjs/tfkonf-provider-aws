import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMediaConvertQueueArgsReservationPlanSettings {
  commitment: string;
  renewal_type: string;
  reserved_slots: number;
}

export interface AwsMediaConvertQueueArgs {
  description?: string;
  name: string;
  pricing_plan?: string;
  status?: string;
  tags?: { [key: string]: string };
  reservation_plan_settings?: AwsMediaConvertQueueArgsReservationPlanSettings;
}

export class aws_media_convert_queue extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMediaConvertQueueArgs) {
    const meta = {reservation_plan_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_media_convert_queue", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
