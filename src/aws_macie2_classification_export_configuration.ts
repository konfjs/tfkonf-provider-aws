import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2ClassificationExportConfigurationArgsS3Destination {
  bucket_name: string;
  key_prefix?: string;
  kms_key_arn: string;
}

export interface AwsMacie2ClassificationExportConfigurationArgs {
  s3_destination?: AwsMacie2ClassificationExportConfigurationArgsS3Destination;
}

export class aws_macie2_classification_export_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMacie2ClassificationExportConfigurationArgs) {
    const meta = {s3_destination:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_macie2_classification_export_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
