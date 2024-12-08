import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAccessanalyzerAnalyzerArgsConfigurationUnusedAccess {
  unused_access_age?: number;
}

export interface AwsAccessanalyzerAnalyzerArgsConfiguration {
  unused_access?: AwsAccessanalyzerAnalyzerArgsConfigurationUnusedAccess;
}

export interface AwsAccessanalyzerAnalyzerArgs {
  analyzer_name: string;
  tags?: { [key: string]: string };
  type?: string;
  configuration?: AwsAccessanalyzerAnalyzerArgsConfiguration;
}

export class aws_accessanalyzer_analyzer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAccessanalyzerAnalyzerArgs) {
    const meta = {configuration:{isBlock:true,unused_access:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_accessanalyzer_analyzer", resourceName);
  }

  get analyzer_name(): string {
    return `${this.resourceType}.${this.resourceName}.analyzer_name`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
