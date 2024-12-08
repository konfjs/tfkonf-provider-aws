import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldProactiveEngagementArgsEmergencyContact {
  contact_notes?: string;
  email_address: string;
  phone_number?: string;
}

export interface AwsShieldProactiveEngagementArgs {
  enabled: boolean;
  emergency_contact?: AwsShieldProactiveEngagementArgsEmergencyContact[];
}

export class aws_shield_proactive_engagement extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsShieldProactiveEngagementArgs) {
    const meta = {emergency_contact:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_shield_proactive_engagement", resourceName);
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
