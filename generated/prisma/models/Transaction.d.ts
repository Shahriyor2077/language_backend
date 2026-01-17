import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type TransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$TransactionPayload>;
export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
export type TransactionAvgAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type TransactionSumAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type TransactionMinAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    studentId: string | null;
    price: runtime.Decimal | null;
    status: $Enums.TransactionStatus | null;
    canceledTime: Date | null;
    performedTime: Date | null;
    reason: string | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransactionMaxAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    studentId: string | null;
    price: runtime.Decimal | null;
    status: $Enums.TransactionStatus | null;
    canceledTime: Date | null;
    performedTime: Date | null;
    reason: string | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransactionCountAggregateOutputType = {
    id: number;
    lessonId: number;
    studentId: number;
    price: number;
    status: number;
    canceledTime: number;
    performedTime: number;
    reason: number;
    isDeleted: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TransactionAvgAggregateInputType = {
    price?: true;
};
export type TransactionSumAggregateInputType = {
    price?: true;
};
export type TransactionMinAggregateInputType = {
    id?: true;
    lessonId?: true;
    studentId?: true;
    price?: true;
    status?: true;
    canceledTime?: true;
    performedTime?: true;
    reason?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransactionMaxAggregateInputType = {
    id?: true;
    lessonId?: true;
    studentId?: true;
    price?: true;
    status?: true;
    canceledTime?: true;
    performedTime?: true;
    reason?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransactionCountAggregateInputType = {
    id?: true;
    lessonId?: true;
    studentId?: true;
    price?: true;
    status?: true;
    canceledTime?: true;
    performedTime?: true;
    reason?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransactionCountAggregateInputType;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction[P]> : Prisma.GetScalarType<T[P], AggregateTransaction[P]>;
};
export type TransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithAggregationInput | Prisma.TransactionOrderByWithAggregationInput[];
    by: Prisma.TransactionScalarFieldEnum[] | Prisma.TransactionScalarFieldEnum;
    having?: Prisma.TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type TransactionGroupByOutputType = {
    id: string;
    lessonId: string;
    studentId: string;
    price: runtime.Decimal;
    status: $Enums.TransactionStatus;
    canceledTime: Date | null;
    performedTime: Date | null;
    reason: string | null;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]>;
}>>;
export type TransactionWhereInput = {
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    lessonId?: Prisma.StringFilter<"Transaction"> | string;
    studentId?: Prisma.StringFilter<"Transaction"> | string;
    price?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    canceledTime?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    performedTime?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    isDeleted?: Prisma.BoolFilter<"Transaction"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type TransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    canceledTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lesson?: Prisma.LessonOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    lessonId?: Prisma.StringFilter<"Transaction"> | string;
    studentId?: Prisma.StringFilter<"Transaction"> | string;
    price?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    canceledTime?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    performedTime?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    isDeleted?: Prisma.BoolFilter<"Transaction"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id">;
export type TransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    canceledTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TransactionCountOrderByAggregateInput;
    _avg?: Prisma.TransactionAvgOrderByAggregateInput;
    _max?: Prisma.TransactionMaxOrderByAggregateInput;
    _min?: Prisma.TransactionMinOrderByAggregateInput;
    _sum?: Prisma.TransactionSumOrderByAggregateInput;
};
export type TransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    lessonId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus;
    canceledTime?: Prisma.DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null;
    performedTime?: Prisma.DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    isDeleted?: Prisma.BoolWithAggregatesFilter<"Transaction"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
};
export type TransactionCreateInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutTransactionsInput;
    student: Prisma.StudentCreateNestedOneWithoutTransactionsInput;
};
export type TransactionUncheckedCreateInput = {
    id?: string;
    lessonId: string;
    studentId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutTransactionsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type TransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionCreateManyInput = {
    id?: string;
    lessonId: string;
    studentId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionListRelationFilter = {
    every?: Prisma.TransactionWhereInput;
    some?: Prisma.TransactionWhereInput;
    none?: Prisma.TransactionWhereInput;
};
export type TransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    canceledTime?: Prisma.SortOrder;
    performedTime?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransactionAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type TransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    canceledTime?: Prisma.SortOrder;
    performedTime?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    canceledTime?: Prisma.SortOrder;
    performedTime?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransactionSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type TransactionCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutStudentInput, Prisma.TransactionUncheckedCreateWithoutStudentInput> | Prisma.TransactionCreateWithoutStudentInput[] | Prisma.TransactionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutStudentInput | Prisma.TransactionCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.TransactionCreateManyStudentInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutStudentInput, Prisma.TransactionUncheckedCreateWithoutStudentInput> | Prisma.TransactionCreateWithoutStudentInput[] | Prisma.TransactionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutStudentInput | Prisma.TransactionCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.TransactionCreateManyStudentInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutStudentInput, Prisma.TransactionUncheckedCreateWithoutStudentInput> | Prisma.TransactionCreateWithoutStudentInput[] | Prisma.TransactionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutStudentInput | Prisma.TransactionCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutStudentInput | Prisma.TransactionUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.TransactionCreateManyStudentInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutStudentInput | Prisma.TransactionUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutStudentInput | Prisma.TransactionUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutStudentInput, Prisma.TransactionUncheckedCreateWithoutStudentInput> | Prisma.TransactionCreateWithoutStudentInput[] | Prisma.TransactionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutStudentInput | Prisma.TransactionCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutStudentInput | Prisma.TransactionUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.TransactionCreateManyStudentInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutStudentInput | Prisma.TransactionUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutStudentInput | Prisma.TransactionUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutLessonInput, Prisma.TransactionUncheckedCreateWithoutLessonInput> | Prisma.TransactionCreateWithoutLessonInput[] | Prisma.TransactionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutLessonInput | Prisma.TransactionCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.TransactionCreateManyLessonInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutLessonInput, Prisma.TransactionUncheckedCreateWithoutLessonInput> | Prisma.TransactionCreateWithoutLessonInput[] | Prisma.TransactionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutLessonInput | Prisma.TransactionCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.TransactionCreateManyLessonInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutLessonInput, Prisma.TransactionUncheckedCreateWithoutLessonInput> | Prisma.TransactionCreateWithoutLessonInput[] | Prisma.TransactionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutLessonInput | Prisma.TransactionCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutLessonInput | Prisma.TransactionUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.TransactionCreateManyLessonInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutLessonInput | Prisma.TransactionUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutLessonInput | Prisma.TransactionUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutLessonInput, Prisma.TransactionUncheckedCreateWithoutLessonInput> | Prisma.TransactionCreateWithoutLessonInput[] | Prisma.TransactionUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutLessonInput | Prisma.TransactionCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutLessonInput | Prisma.TransactionUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.TransactionCreateManyLessonInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutLessonInput | Prisma.TransactionUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutLessonInput | Prisma.TransactionUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
};
export type TransactionCreateWithoutStudentInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutTransactionsInput;
};
export type TransactionUncheckedCreateWithoutStudentInput = {
    id?: string;
    lessonId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionCreateOrConnectWithoutStudentInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutStudentInput, Prisma.TransactionUncheckedCreateWithoutStudentInput>;
};
export type TransactionCreateManyStudentInputEnvelope = {
    data: Prisma.TransactionCreateManyStudentInput | Prisma.TransactionCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type TransactionUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutStudentInput, Prisma.TransactionUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutStudentInput, Prisma.TransactionUncheckedCreateWithoutStudentInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutStudentInput, Prisma.TransactionUncheckedUpdateWithoutStudentInput>;
};
export type TransactionUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutStudentInput>;
};
export type TransactionScalarWhereInput = {
    AND?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    OR?: Prisma.TransactionScalarWhereInput[];
    NOT?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    lessonId?: Prisma.StringFilter<"Transaction"> | string;
    studentId?: Prisma.StringFilter<"Transaction"> | string;
    price?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    canceledTime?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    performedTime?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    isDeleted?: Prisma.BoolFilter<"Transaction"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
};
export type TransactionCreateWithoutLessonInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutTransactionsInput;
};
export type TransactionUncheckedCreateWithoutLessonInput = {
    id?: string;
    studentId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionCreateOrConnectWithoutLessonInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutLessonInput, Prisma.TransactionUncheckedCreateWithoutLessonInput>;
};
export type TransactionCreateManyLessonInputEnvelope = {
    data: Prisma.TransactionCreateManyLessonInput | Prisma.TransactionCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type TransactionUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutLessonInput, Prisma.TransactionUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutLessonInput, Prisma.TransactionUncheckedCreateWithoutLessonInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutLessonInput, Prisma.TransactionUncheckedUpdateWithoutLessonInput>;
};
export type TransactionUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutLessonInput>;
};
export type TransactionCreateManyStudentInput = {
    id?: string;
    lessonId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionCreateManyLessonInput = {
    id?: string;
    studentId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TransactionStatus;
    canceledTime?: Date | string | null;
    performedTime?: Date | string | null;
    reason?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    canceledTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    performedTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    price?: boolean;
    status?: boolean;
    canceledTime?: boolean;
    performedTime?: boolean;
    reason?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    price?: boolean;
    status?: boolean;
    canceledTime?: boolean;
    performedTime?: boolean;
    reason?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    price?: boolean;
    status?: boolean;
    canceledTime?: boolean;
    performedTime?: boolean;
    reason?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectScalar = {
    id?: boolean;
    lessonId?: boolean;
    studentId?: boolean;
    price?: boolean;
    status?: boolean;
    canceledTime?: boolean;
    performedTime?: boolean;
    reason?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonId" | "studentId" | "price" | "status" | "canceledTime" | "performedTime" | "reason" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>;
export type TransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type TransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $TransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transaction";
    objects: {
        lesson: Prisma.$LessonPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lessonId: string;
        studentId: string;
        price: runtime.Decimal;
        status: $Enums.TransactionStatus;
        canceledTime: Date | null;
        performedTime: Date | null;
        reason: string | null;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["transaction"]>;
    composites: {};
};
export type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransactionPayload, S>;
export type TransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionCountAggregateInputType | true;
};
export interface TransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
        meta: {
            name: 'Transaction';
        };
    };
    findUnique<T extends TransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransactionFindManyArgs>(args?: Prisma.SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransactionCreateArgs>(args: Prisma.SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransactionDeleteArgs>(args: Prisma.SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransactionUpdateArgs>(args: Prisma.SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransactionUpsertArgs>(args: Prisma.SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransactionCountArgs>(args?: Prisma.Subset<T, TransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionCountAggregateOutputType> : number>;
    aggregate<T extends TransactionAggregateArgs>(args: Prisma.Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;
    groupBy<T extends TransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: TransactionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransactionFieldRefs;
}
export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransactionFieldRefs {
    readonly id: Prisma.FieldRef<"Transaction", 'String'>;
    readonly lessonId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly studentId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly price: Prisma.FieldRef<"Transaction", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Transaction", 'TransactionStatus'>;
    readonly canceledTime: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly performedTime: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"Transaction", 'String'>;
    readonly isDeleted: Prisma.FieldRef<"Transaction", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
}
export type TransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
};
export type TransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    where?: Prisma.TransactionWhereInput;
    limit?: number;
};
export type TransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    where?: Prisma.TransactionWhereInput;
    limit?: number;
    include?: Prisma.TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
};
export type TransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    limit?: number;
};
export type TransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
};
export {};
