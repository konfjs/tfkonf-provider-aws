import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimesdkvoiceSipRuleArgsTargetApplications {
  aws_region: string;
  priority: number;
  sip_media_application_id: string;
}

export interface AwsChimesdkvoiceSipRuleArgs {
  disabled?: boolean;
  name: string;
  trigger_type: string;
  trigger_value: string;
  target_applications: AwsChimesdkvoiceSipRuleArgsTargetApplications[];
}

export class aws_chimesdkvoice_sip_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimesdkvoiceSipRuleArgs) {
    const meta = {target_applications:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chimesdkvoice_sip_rule", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get trigger_type(): string {
    return `${this.resourceType}.${this.resourceName}.trigger_type`;
  }

  get trigger_value(): string {
    return `${this.resourceType}.${this.resourceName}.trigger_value`;
  }
}
