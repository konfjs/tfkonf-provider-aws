import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool {
  value: boolean;
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble {
  value: number;
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum {
  value: string;
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumList {
  value: string[];
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt {
  value: number;
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntList {
  value: number[];
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString {
  value: string;
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringList {
  value: string[];
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter {
  name: string;
  value_type: string;
  bool?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool;
  double?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble;
  enum?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum;
  enum_list?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumList;
  int?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt;
  int_list?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntList;
  string?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString;
  string_list?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringList;
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter {
  security_control_id: string;
  parameter: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[];
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfiguration {
  disabled_control_identifiers?: string[];
  enabled_control_identifiers?: string[];
  security_control_custom_parameter?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[];
}

export interface AwsSecurityhubConfigurationPolicyArgsConfigurationPolicy {
  enabled_standard_arns?: string[];
  service_enabled: boolean;
  security_controls_configuration?: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicySecurityControlsConfiguration;
}

export interface AwsSecurityhubConfigurationPolicyArgs {
  description?: string;
  name: string;
  configuration_policy: AwsSecurityhubConfigurationPolicyArgsConfigurationPolicy;
}

export class aws_securityhub_configuration_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecurityhubConfigurationPolicyArgs) {
    const meta = {configuration_policy:{isBlock:true,security_controls_configuration:{isBlock:true,security_control_custom_parameter:{isBlock:true,parameter:{isBlock:true,bool:{isBlock:true},double:{isBlock:true},enum:{isBlock:true},enum_list:{isBlock:true},int:{isBlock:true},int_list:{isBlock:true},string:{isBlock:true},string_list:{isBlock:true}}}}}};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_configuration_policy", resourceName);
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
}
