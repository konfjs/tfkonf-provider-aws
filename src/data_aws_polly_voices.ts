import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsPollyVoicesArgsVoices {
}

export interface DataAwsPollyVoicesArgs {
  engine?: string;
  include_additional_language_codes?: boolean;
  language_code?: string;
  voices?: DataAwsPollyVoicesArgsVoices[];
}

export class data_aws_polly_voices extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsPollyVoicesArgs) {
    const meta = {voices:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_polly_voices", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
